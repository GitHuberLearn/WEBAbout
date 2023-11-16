<!--
 * @Descripttion: Sustainable
 * @version: 1.0.0
 * @Author: Kenny
 * @Date: 2022-09-14 15:29:06
 * @LastEditors: ~
 * @LastEditTime: 2023-11-16 16:28:58
-->

# GIT

## 公钥重新生成使用

### 1、首先得重新在 git 设置一下身份的名字和邮箱

### 2、删除.ssh 文件夹（直接搜索该文件夹）下的 known_hosts(手动删除即可，不需要 git）

### 3、git 输入命令

      1. 输入：ssh-keygen -t rsa -C "1736406840@qq.com"（请填你设置的邮箱地址）
             一直回车到 +----[SHA256]-----+
      2.复制：C:\Users\Lenovo\.ssh 到 id_rsa.pub 到 https://github.com
         登陆账户，进入设置（Settings）找到 key 中 Add SSH Key 粘贴 (SSH_Work)
      3.输入：ssh -T git@github.com
         然后会跳出一堆话。。
         输入命令：yes
         回车
         然后就会提示你成功了~~
      4.输入：git clone + ssh~url
         克隆成功!

         cat ~/.ssh/id_rsa.pub
         git config --global user.email "1736406840@qq.com"（账户email）
         git config --global user.name "解码云集者"（name）

         //避免重复输入用户信息
         git config --global credential.helper store
         git pull /git push (第一次输入，后续就不用再次数据)
         //解决：Github 禁用了TLS v1.0 and v1.1，必须更新Windows的git凭证管理器
         https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases
         (安装GCMW)

### GIt 提交：

      第一步：git init 初次使用
      （git clone 返回页面克隆代码->进行下载）
      第二步：git status 查看修改文件
      第三步：git add “... ” 跟踪文件/要加文件
      第四步：git commit -m "修改的文件备注"
      第五步：git pull --> git push

      查看状态：
      git log:查看全部提交历史 。 由于命令窗口的限制，如果提交历史过多，可能无法完全显示在屏幕上，这时候，可以敲击回车键继续查看
      git log -p -2:查看最近 2 次提交历史并展示修改的内容
      git log - -stat:查看提交历史，并展示摘要内容（摘要会列出修改的文件以及每个文件中修改了多少行）
      查看改动情况：git diff

      git pull (一句命令搞定更新)

      备注：此 git 文件夹创建不能移动，否则重新来过集成

      GIt 附加
            例如：增删改查（一律执行 4-5）
            git init-->git status-->git add 文件-->git status-->
            git add . 跟踪文件git
            git push origin 分支名
            git rm “... ”文件 删除
            git rm -r “... ”文件夹/ 如果你要删除的，是空的文件夹，此处可以不用带上-r
            分支branch
                      查看                    删除
            本地：git branch              git branch -d [name] (强制删除使用-D)
            远程：git branch -r           git push origin :heads/[name]
                  

### cmd

      reset 清屏
      cd 执行文件
      touch “... ” 创建文件
      vim “ ...”
      编辑模式打开文件，如果文件存在则打开现有文件
      按下 ESC 键，键入"ZZ"或者":wq"保存修改并且退出 vim
      mkdir“... ” 创建文件夹
      cd .. / 返回上级
      rd 删除/s 强制删除
      ctrl+c 退出当下程序

### 信息

      git config --global user.email "1736406840@qq.com"
      git config --global user.name "解码云集者"
