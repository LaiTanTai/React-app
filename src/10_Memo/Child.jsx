import React ,{ memo} from 'react'

function Child({setMS}) {
    console.log("child")
  return (
    <div>
        Child
    </div>
  )
}
// memo sẽ ghi nhớ output của component khi component kích hoạt quá trình hiển thị lại , nó sẽ đi kiểm tra gt props (nếu có) và nếu có bất kì props nào thay đổi thì nó sẽ render lại ko thì thôi 
export default memo(Child);