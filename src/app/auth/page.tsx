import Form from "next/form";
import {login} from "@/server-actions/authActions";
import styles from "./Auth.module.css";

type Props = {
    searchParams: Promise<{ error?: string }>
}

const AuthPage = async ({searchParams}: Props) => {
    const {error} = await searchParams;

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Sign In</h1>

                {error && <p className={styles.error}>Invalid login or password</p>}

                <Form action={login} className={styles.form}>
                    <input
                        className={styles.input}
                        type="text"
                        name="login"
                        placeholder="Login"
                    />
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <button className={styles.btn} type="submit">Sign in</button>
                </Form>
            </div>
        </div>
    );
}

export default AuthPage;
