import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Обязательное поле'),
  lastName: Yup.string().required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  email: Yup.string()
    .email('Неверный формат email')
    .required('Обязательное поле'),
});

const ScriptSubmissionForm = ({ onClick, className }) => {
  return (
    <div className={`script-form-bg ${className}`}>
      <Formik
        initialValues={{ firstName: '', lastName: '', phone: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {}}
      >
        {() => (
          <Form className="script-form grid">
            <button onClick={onClick} className="absolute right-0">
              <div className="cancel-container relative"></div>
            </button>

            <label className="flex flex-col text-base">
              <input type="file" name="file" />
            </label>
            <label>
              <Field type="text" name="firstName" placeholder="Имя" />
              <ErrorMessage name="firstName" component="span" />
            </label>
            <label>
              <Field type="text" name="lastName" placeholder="Фамилия" />
              <ErrorMessage name="lastName" component="span" />
            </label>
            <label>
              <Field type="text" name="phone" placeholder="Телефон" />
              <ErrorMessage name="phone" component="span" />
            </label>
            <label>
              <Field type="text" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="span" />
            </label>

            <label>
              <button
                type="submit"
                className="send-btn w-3/4 text-lg lg:text-2xl"
              >
                Отправить
              </button>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ScriptSubmissionForm;
