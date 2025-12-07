import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log("User registered with Formik:", values);
                alert("Registration successful with Formik!");
                resetForm();
            }}
        >
            {() => (
                <Form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Register (Formik)</h2>

                    <div>
                        <label className="block text-gray-700">Username</label>
                        <Field type="text" name="username" className="w-full border rounded px-3 py-2" />
                        <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <Field type="email" name="email" className="w-full border rounded px-3 py-2" />
                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                    </div>

                    <div>
                        <label className="block text-gray-700">Password</label>
                        <Field type="password" name="password" className="w-full border rounded px-3 py-2" />
                        <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikForm;