import m from 'mithril';
import Igal from './view/Igal';
import Shlomi from './view/Shlomi';
import Amit from './view/Amit';
import Vitali from './view/Vitali';
import Haim from './view/Haim';
import Adam from './view/Adam';

var root = document.getElementById('root');

var App = {
    view: function () {
        return m('div', [
            m(Igal),
            m(Shlomi),
            m(Amit),
            m(Vitali),
            m(Haim),
            m(Adam)
        ])
    }
}

m.mount(root, App)