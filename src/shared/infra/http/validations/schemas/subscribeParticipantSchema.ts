import * as yup from 'yup';

const subscribeDataSchema = {
  courseId: yup.string().required(),
  reason: yup.string().required(),
  examAnswers: yup
    .array()
    .of(
      yup.object().shape({
        questionId: yup.string().required(),
        response: yup.number().max(5).min(1).required(),
      })
    )
    .optional(),
  videoLink: yup.string().optional(),
};

export const subscribeParticipantValidationSchema = yup.object().shape({
  option1: yup.object().shape(subscribeDataSchema).required(),
  option2: yup.object().shape(subscribeDataSchema).default(null).nullable(),
});
