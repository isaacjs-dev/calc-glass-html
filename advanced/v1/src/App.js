function App() {
    const app = el.div({
        class: 'container'
    }, Calc());

    VanillaTilt.init(app, {
        max: 25,
        speed: 400,
        glare: false,
        "max-glare": 0.2,
    });

    return app;
};

createApp(App());