import m from 'mithril';

var Amit = {
    view: function () {
        return m('div', [
            m('h3', "Amit's Header"),
            m('p', "Amit's component"),
            m('p', "Amit's Second component")
        ])
    }
}

export default Amit;