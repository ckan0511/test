//
// 导入页面路由模块
import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import text from '@ohos.graphics.text';

@Entry
@Component
struct Second {
  @State start :boolean=false
  @State reverse:boolean=false
  @State iterations:number=1
Fr South Station 1
  build() {
    Column() {
      Flex() {
        CheckboxGroup({ group: 'groupname' })
          .padding('20')
          .borderWidth('1')
        Text('All')
          .padding('20')
          .borderWidth('1')
      }

    }
  }
  }
