import Detail from "./pages/Detail.vue";
import Shipping from "./pages/Shipping.vue";
import ShippingList from "./pages/ShippingList.vue";

export default [
    {
        path: "/",
        component: Detail,
    },
    {
        path: "/detail",
        component: Detail,
    },
    {
        path: "/shippingList",
        component: ShippingList,
    },
    {
        path: "/shipping",
        component: Shipping
    }
]