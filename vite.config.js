import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';


export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    console.log(`process.env`, process.env)

    console.log(`vite envs`, import.meta.env)
    // import.meta.env.VITE_FOO available here with: process.env.VITE_FOO
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return defineConfig({
        plugins: [vue()],

        server: {
            port: process.env.VITE_PORT,
        },
    });
}