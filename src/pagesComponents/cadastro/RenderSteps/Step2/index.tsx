import { Form } from '@unform/web';
import AnimationRegisterStep2 from 'assets/lotties/registerStep2.json';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import SelectUnform from 'components/SelectUnform';
import useApi from 'hooks/useApi';
import { useRouter } from 'next/router';
import { CadastroLayout } from 'pagesComponents/cadastro/components/CadastroLayout';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import api from 'services/api';
import * as yup from 'yup';
import Button from '../../../../components/Button';
import { CadastroContext } from '../../CadastroContext';
import * as S from './styles';

interface SelectItem {
  label: string;
  value: string;
}

export const Step2 = () => {
  const router = useRouter();
  const { nextStep, step, setCadastroData, cadastroData, setAsks } = useContext(
    CadastroContext
  );
  const { apiGetAsks, apiRegister } = useApi();
  const [livesInBrazil, setLivesInBrazil] = useState(true);
  const [states, setStates] = useState<SelectItem[]>([]);
  const [cities, setCities] = useState<SelectItem[]>([]);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const fetchStates = async () => {
      const { data } = await api.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      );

      setStates(
        data.map((state: { nome: string; id: string }) => ({
          label: state.nome,
          value: state.id,
        }))
      );
    };

    fetchStates();
  }, []);

  const fetchCities = useCallback(async (stateId: string) => {
    const { data } = await api.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios?orderBy=nome`
    );

    setCities(
      data.map((city: { nome: string; id: string }) => ({
        label: city.nome,
        value: city.id,
      }))
    );
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      formRef.current.setErrors({});

      let schema: yup.AnyObjectSchema;

      if (livesInBrazil) {
        data.country = 'Brasil';

        schema = yup.object().shape({
          state: yup.string().required('Estado é obrigatório.'),
          city: yup.string().required('Cidade é obrigatória.'),
        });
      } else {
        schema = yup.object().shape({
          country: yup.string().required('País é obrigatório.'),
          state: yup.string().required('Estado é obrigatório.'),
          city: yup.string().required('Cidade é obrigatória.'),
        });
      }

      try {
        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (error) {
        const validationErrors = {};

        if (error instanceof yup.ValidationError) {
          error.inner.forEach((currentError) => {
            validationErrors[currentError.path] = currentError.message;
          });
          formRef.current.setErrors(validationErrors);
        }

        return;
      }

      if (livesInBrazil) {
        data.state = states.find((state) => state.value === data.state)?.label;
        data.city = cities.find((city) => city.value === data.city)?.label;
      }

      setLoading(true);

      try {
        const {
          data: { asks },
        } = await apiGetAsks();

        if (asks.length === 0) {
          await apiRegister({
            asksAnswers: [],
            ...cadastroData,
            ...data,
          });

          return router.push('/cadastro/finalizado');
        }

        setAsks(asks);
        setCadastroData((previousData) => ({ ...previousData, ...data }));
        nextStep();
      } catch (error) {
        setLoading(false);
        /** @TODO Tratar erro apiGetAsks e apiRegister */
      }
    },
    [
      apiGetAsks,
      apiRegister,
      cadastroData,
      cities,
      livesInBrazil,
      nextStep,
      router,
      setAsks,
      setCadastroData,
      states,
    ]
  );

  return (
    <CadastroLayout
      step={step}
      title="Endereço"
      subtitle="Não se esqueça de conferir seus dados antes de continuar para a
    próxima etapa."
      footer={{
        icon: '/icons/Presentation.svg',
        title: 'Professores',
        subtitle: 'Você terá aulas com o melhor time de profesores.',
        animation: AnimationRegisterStep2,
      }}
    >
      <S.FormContainer>
        <Form
          initialData={cadastroData}
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ width: '100%' }}
        >
          <Checkbox
            name="checkbox"
            label="Mora no Brasil"
            checked={livesInBrazil}
            onChange={(event) => setLivesInBrazil(event.target.checked)}
            style={{
              marginBottom: '1.5rem',
              fontWeight: 'bold',
            }}
          />

          {livesInBrazil ? (
            <>
              <SelectUnform
                name="state"
                id="states"
                items={states}
                placeholder="Estados"
                style={{ marginBottom: '3rem' }}
                onChange={(state) => fetchCities(state.value)}
              />

              <SelectUnform
                name="city"
                id="cities"
                items={cities}
                placeholder="Cidades"
                style={{ marginBottom: '3rem' }}
              />
            </>
          ) : (
            <>
              <Input
                label="País *"
                placeholder="País"
                name="country"
                style={{ marginBottom: '3rem' }}
              />

              <Input
                label="Estado *"
                name="state"
                placeholder="Estado"
                style={{ marginBottom: '3rem' }}
              />

              <Input
                label="Cidade *"
                placeholder="Cidade"
                name="city"
                style={{ marginBottom: '3rem' }}
              />
            </>
          )}

          <Button disabled={loading}>Continuar cadastro</Button>
        </Form>
      </S.FormContainer>
    </CadastroLayout>
  );
};
