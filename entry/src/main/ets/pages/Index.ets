@Entry
@Component
struct TextDemo {

  build() {

    Row() {
      Column() {
        Text('我是一段文本')
        Text($r('app.string.module_desc'))
      }
      .width('100%')
    }
    .height('100%')
  }
}
