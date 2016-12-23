<script>
    const Index = {template: '<div>index</div>'}
    const Login = {template: '<div>login</div>'}
    const routes = [
        {path: '/login', component: Login},
        {path: '/index', component: Index}
    ]

    const router = new VueRouter({
        routes: routes,
    })
</script>