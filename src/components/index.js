import Loadable from 'react-loadable'
import Buttons from './ui/Buttons';
import Loading from './widget/Loading'
const WysiwyBundle = Loadable({ // 按需加载富文本配置
  loader: () => import('./ui/Wysiwyg'),
  loading: Loading
})
export default {
  Buttons,
  WysiwyBundle
}