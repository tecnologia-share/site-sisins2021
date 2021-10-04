import { Connection } from 'typeorm';
import { ProcessoSeletivo } from '../../models/ProcessoSeletivo';
/**
 *  Criar no banco de dados um processo seletivo inativo
 * @param  {Connection} connection
 * @returns id do processo seletivo
 */
export const createSelectionProcessInactive = async (
  connection: Connection
): Promise<string> => {
  const pastDate = new Date();
  pastDate.setFullYear(pastDate.getFullYear() - 1);
  const selectiveProcessRepository = connection.getRepository(ProcessoSeletivo);

  const selectiveProcessInactive = selectiveProcessRepository.create({
    data_inicio: pastDate,
    data_final: pastDate,
    nome: 'Selective Process Name',
    link_edital: 'link edital',
    link_manual: 'link manual',
  });
  await selectiveProcessRepository.save(selectiveProcessInactive);

  return selectiveProcessInactive.id;
};
