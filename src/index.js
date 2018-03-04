import m from 'mithril';
import Igal from './view/Igal';
import Shlomi from './view/Shlomi'

var root = document.getElementById('root');

var App = {
    view: function () {
        return m('div', [m(Igal), m(Shlomi)])
    }
}

m.mount(root, App)