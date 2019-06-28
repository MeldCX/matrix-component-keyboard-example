window.onload = () => {
    const kb = document.querySelector('m-keyboard');
    const settings = document.querySelector('form.settings');

    const handleChange = e => {
        const {name, value} = e.target;
        switch (name) {
            case 'show':
                kb.show = e.target.checked;
                break;

            default:
                kb.style.setProperty(`--${name}`, value);
                break;
        }
    };

    Array.from(settings.querySelectorAll('input')).forEach(inp => {
        inp.addEventListener('change', handleChange);
        inp.addEventListener('keyup', handleChange);
    });

    kb.addLayout('test', [[
        {width: 1}, {width: 2}, {width: 2}
    ]]);
    kb.addKeyset('test', [[
        1, 2, 3
    ]]);
};
