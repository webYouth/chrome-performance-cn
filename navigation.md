## 事件循环

### 浏览器原理

#### 何为进程

程序运行需要有它专属的内存空间，可以把这块内存空间简单的理解为进程

#### 何为线程

有了进程后，就可以运行程序的代码了。

运行程序代码的 **人** 称之为 **线程**

一个进程至少需要一个线程，所以进程开启后会自动创建线程来运行代码，该线程称
之为主线程。

如果程序需要执行多快代码