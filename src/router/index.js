import Vue from "vue";
import VueRouter from "vue-router";

//首頁
import Demo from "../components/demo";
import InsidePage from "../components/insidePage";
import Default from "../components/default";
import About from "../components/about";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Services from "../components/services";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        { path: "/", component: Demo,
            children: [
                { path: "", name: "index", component: Default },
                {
                    path: "", component: InsidePage,
                    children: [
                        { path: "about", name: "about", component: About },
                        { path: "blog", name: "blog", component: Blog },
                        { path: "contact", name: "contact", component: Contact },
                        { path: "services", name: "services", component: Services }
                    ]
                }
            ]
        }
    ]
});

export default router;
