import m from 'mithril';

var Amit = {
    view: function () {
        return m('div', [
            m('h1', "Amit's Header"),
            m('p', "Amit's component"),
            m('p', "Amit's Second component")
        ])
    }
}

export default Amit;