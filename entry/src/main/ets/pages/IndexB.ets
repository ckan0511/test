@Entry
@Component
struct TextDemo {
  build() {
    Row() {
      Column() {
        Text('我是一个文本')
      }
      .width('100%')
    }
    .height('100%')
  }
}