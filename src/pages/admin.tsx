import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Header from "../Views/HeaderView";

import { useForm } from "react-hook-form";
import axios from "axios";

import formStyles from "../styles/form.module.css";
import styles from "../styles/Admin.module.css";

interface IFormInputs {
  username: string;
  password: string;
}

export const admin = () => {
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    // resolver: zodResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    setSubmitting(true);
    (async () => {
      const res = await axios.post("/api/auth", data);
      setSubmitting(false);
      if (res.status == 200) {
        // success
        window.localStorage.setItem("", "");
        router.push("/admin/dashboard");
      } else {
        // Error
      }
    })();
  };

  return (
    <>
      <Head>
        <title>Admin Auth</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Authentication for Jacob Miller's portfolio."
          key="title"
        />
      </Head>
      <div>
        <div id="top-stripe"></div>
        <Header />
        <Container>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Col id={styles.auth_wrapper}>
              <h1>Admin Portal</h1>
              <form
                className={formStyles.form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  ref={register}
                  placeholder="Username"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  ref={register}
                  placeholder="Password"
                />

                {submitting ? (
                  <div style={{ textAlign: "center" }}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  <>
                    <label>&nbsp;</label>
                    <input className={formStyles.submit} type="submit" />
                  </>
                )}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default admin;

// export async function GetServerSideProps() {
//   // const user = req
// }
