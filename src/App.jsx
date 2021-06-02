import './assets/stylus/app.styl';
import {
    defineComponent
} from 'vue';

// import BiSvg from 'assets/icon/BI.svg';
import SearchSvg from 'assets/icon/search.svg';

const App = defineComponent({
    name: 'App',
    // components: { BiSvg },
    setup() {
        return () => (
            <div className="app">
                app
                {/* <BiSvg/> */}
                <SearchSvg/>
            </div>
        );
    }
});

export default App;
