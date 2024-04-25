import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    build: {
        copyPublicDir: false,
        lib: {
            name: "main",
            fileName: "main",
            entry: resolve(__dirname, 'src/main.tsx'),
        },
        rollupOptions:{
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
