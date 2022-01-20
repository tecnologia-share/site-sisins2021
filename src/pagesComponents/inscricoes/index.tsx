import useApi from 'hooks/useApi';
import { Dictionary, groupBy, keyBy } from 'lodash';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import CardCourse from './CardCourse';
import CardSelectedCourse from './CardSelectedCourse';
import EmptyCourses from './EmptyCourses';
import ModalCourseRequirement from './ModalCourseRequirement';
import {
  CardSelectCourseContainer,
  CategoryTitle,
  Container,
  CoursesContainer,
  SectionCourses,
  SectionOptions,
  SelectedCardsContainer,
  SwapContainer,
  SwapIcon,
  TextOption,
  WelcomeTitle,
} from './styles';
import { Course } from './types/Course';

interface ModalState {
  open: boolean;
  courseTitle: string;
  numberOfQuestions: number;
  onAccept: () => void;
}

const Inscricoes = () => {
  const [modalState, setModalState] = useState({} as ModalState);
  const [categories, setCategories] = useState<Dictionary<Course[]>>({});
  const [coursesById, setCoursesById] = useState<Dictionary<Course>>({});
  const [loading, setLoading] = useState(true);
  const { apiGetCourses } = useApi();
  const [firstId, setFirstId] = useState('');
  const [secondaryId, setSecondaryId] = useState('');
  const router = useRouter();

  const setCourse = useCallback(
    (courseId: string) => {
      if (firstId) {
        setSecondaryId(courseId);
      } else {
        setFirstId(courseId);
      }
    },
    [firstId]
  );

  const removeFirstOption = useCallback(() => {
    if (secondaryId) {
      setSecondaryId('');
      setFirstId(secondaryId);
    } else {
      setFirstId('');
    }
  }, [secondaryId]);

  const removeSecondaryOption = useCallback(() => {
    setSecondaryId('');
  }, []);

  const swapCourses = useCallback(() => {
    if (firstId && secondaryId) {
      setFirstId(secondaryId);
      setSecondaryId(firstId);
    }
  }, [firstId, secondaryId]);

  const closeModal = useCallback(() => {
    setModalState({
      courseTitle: '',
      numberOfQuestions: 0,
      open: false,
      onAccept: undefined,
    });
  }, []);

  const selectCourse = useCallback(
    (courseId: string) => {
      const { name, hasExam, numberOfQuestions } = coursesById[courseId];

      if (courseId === firstId) {
        removeFirstOption();
        return;
      }

      if (courseId === secondaryId) {
        removeSecondaryOption();
        return;
      }

      if (secondaryId) {
        /** @TODO message warning the user that he has already chosen two courses */
        return;
      }

      if (hasExam) {
        setModalState({
          courseTitle: name,
          numberOfQuestions,
          open: true,
          onAccept: () => {
            setCourse(courseId);
            closeModal();
          },
        });
      } else {
        setCourse(courseId);
      }
    },
    [
      closeModal,
      coursesById,
      firstId,
      removeFirstOption,
      removeSecondaryOption,
      secondaryId,
      setCourse,
    ]
  );

  useEffect(() => {
    apiGetCourses().then((response) => {
      const { courses } = response.data;
      const coursesByCategory = groupBy(courses, (course) => course.category);
      const coursesById = keyBy(courses, (course) => course.id);
      setCategories(coursesByCategory);
      setCoursesById(coursesById);
      setLoading(false);
    });
  }, [apiGetCourses]);

  const handleSubmit = useCallback(() => {
    router.push(
      {
        pathname: '/inscricoes/concluir',
        query: {
          course1: JSON.stringify(coursesById[firstId]),
          course2: secondaryId
            ? JSON.stringify(coursesById[secondaryId])
            : undefined,
        },
      },
      '/inscricoes/concluir'
    );
  }, [coursesById, firstId, router, secondaryId]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {Object.keys(categories).length > 0 ? (
        <>
          <Container>
            <SectionOptions>
              <SelectedCardsContainer>
                <CardSelectCourseContainer>
                  <TextOption>1ª Opção</TextOption>
                  <CardSelectedCourse
                    onClose={removeFirstOption}
                    empty={!firstId}
                    selectedOption={firstId ? 'first' : undefined}
                    description={
                      firstId ? coursesById[firstId].description : ''
                    }
                    title={firstId ? coursesById[firstId].name : ''}
                  />
                </CardSelectCourseContainer>
                <SwapContainer onClick={swapCourses}>
                  <SwapIcon src="icons/Swap.svg" />
                </SwapContainer>
                <CardSelectCourseContainer>
                  <TextOption>2ª Opção</TextOption>
                  <CardSelectedCourse
                    onClose={removeSecondaryOption}
                    empty={!secondaryId}
                    selectedOption={secondaryId ? 'secondary' : undefined}
                    description={
                      secondaryId ? coursesById[secondaryId].description : ''
                    }
                    title={secondaryId ? coursesById[secondaryId].name : ''}
                  />
                </CardSelectCourseContainer>
              </SelectedCardsContainer>
              <Button onClick={handleSubmit} enabled={!!firstId} size="small">
                Continuar inscrição
              </Button>
            </SectionOptions>
            <SectionCourses>
              <WelcomeTitle>
                Bem-vindo aos cursos da Share, escolha dois cursos dentre as
                categorias abaixo
              </WelcomeTitle>
              {Object.keys(categories).map((category) => (
                <div key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  <CoursesContainer>
                    {categories[category].map((course) => (
                      <CardCourse
                        checked={
                          course.id === firstId || course.id === secondaryId
                        }
                        selectedOption={
                          course.id === firstId
                            ? 'first'
                            : course.id === secondaryId
                            ? 'secondary'
                            : undefined
                        }
                        onSelect={() => selectCourse(course.id)}
                        key={course.id}
                        description={course.description}
                        title={course.name}
                      />
                    ))}
                  </CoursesContainer>
                </div>
              ))}
            </SectionCourses>
          </Container>

          <ModalCourseRequirement
            courseTitle={modalState.courseTitle}
            numberOfQuestions={modalState.numberOfQuestions}
            onAccept={modalState.onAccept}
            onClose={closeModal}
            open={modalState.open}
          />
        </>
      ) : (
        <EmptyCourses />
      )}
    </>
  );
};

export default Inscricoes;
