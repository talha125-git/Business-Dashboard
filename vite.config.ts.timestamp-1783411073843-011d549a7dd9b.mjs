// vite.config.ts
import { defineConfig } from "file:///D:/Skills/NAME%20REPO%20challenge/4)%20%20%20H/a)%20%20%2021-23%20june/b)%20%20%2022/react%20dashboard-main/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Skills/NAME%20REPO%20challenge/4)%20%20%20H/a)%20%20%2021-23%20june/b)%20%20%2022/react%20dashboard-main/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///D:/Skills/NAME%20REPO%20challenge/4)%20%20%20H/a)%20%20%2021-23%20june/b)%20%20%2022/react%20dashboard-main/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "D:\\Skills\\NAME REPO challenge\\4)   H\\a)   21-23 june\\b)   22\\react dashboard-main";
var vite_config_default = defineConfig(({ mode }) => ({
  base: "/Business-Dashboard/",
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTa2lsbHNcXFxcTkFNRSBSRVBPIGNoYWxsZW5nZVxcXFw0KSAgIEhcXFxcYSkgICAyMS0yMyBqdW5lXFxcXGIpICAgMjJcXFxccmVhY3QgZGFzaGJvYXJkLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFNraWxsc1xcXFxOQU1FIFJFUE8gY2hhbGxlbmdlXFxcXDQpICAgSFxcXFxhKSAgIDIxLTIzIGp1bmVcXFxcYikgICAyMlxcXFxyZWFjdCBkYXNoYm9hcmQtbWFpblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU2tpbGxzL05BTUUlMjBSRVBPJTIwY2hhbGxlbmdlLzQpJTIwJTIwJTIwSC9hKSUyMCUyMCUyMDIxLTIzJTIwanVuZS9iKSUyMCUyMCUyMDIyL3JlYWN0JTIwZGFzaGJvYXJkLW1haW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIGJhc2U6IFwiL0J1c2luZXNzLURhc2hib2FyZC9cIixcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1vZGUgPT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICBjb21wb25lbnRUYWdnZXIoKSxcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNmMsU0FBUyxvQkFBb0I7QUFDMWUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUNULGdCQUFnQjtBQUFBLEVBQ2xCLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
