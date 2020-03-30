<template>
  <div class="app">
    <!-- 简历 -->
    <main class="container">
      <div class="leftSide">
        <div class="logo">
          <img src="../../static/img/logo.png" alt />
          <h1>liulib的简历</h1>
        </div>
        <div class="baseInfo">
          <div class="infoTitle"><h2>基本信息</h2></div>
          <ul>
            <li>
              <span>姓<span class="space"></span><span class="space"></span>名：</span>liulib
            </li>
            <li>
              <span>毕业院校：</span>湖南科技大学商学院
            </li>
            <li>
              <span>毕业时间：</span>2018.06
            </li>
            <li>
              <span>博<span class="space"></span><span class="space"></span>客：</span>
              <a href="http://www.liulib.com" target="__blank">www.liulib.com</a>
            </li>
            <li>
              <span>Git Hub：</span>
              <a href="https://github.com/liulib" target="__blank">github.com/liulib</a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="infoTitle"><h2>联系方式</h2></div>
          <ul @mouseover="handle64">
              <li><span>手机号：</span>{{ this.contactInfo.phone }}</li>
              <li><span>邮<span class="space"></span>箱：</span>{{ this.contactInfo.email }}</li>
              <li><span>微<span class="space"></span>信：</span>{{ this.contactInfo.wechat }}</li>
              <li><span>扣<span class="space"></span>扣：</span>{{ this.contactInfo.qq }}</li>
          </ul>
        </div>
        <div class="job">
          <div class="infoTitle"><h2>应聘岗位</h2></div>
          <ul>
              <li><span>初级前端工程师</span></li>
          </ul>
        </div>
        <!-- <div class="about">
          <div class="infoTitle"><h2>关于</h2></div>
        </div> -->
      </div>
      <div class="rigthSide">
        <div class="content">
          <h1>掌握技能</h1><hr />
          <h2>前端</h2>
          <ul class="itemList">
            <li>
              <h3>HTML/CSS</h3>
              <p>能够编写语义化的 HTML，模块化的 CSS，完成较复杂的布局,熟练使用css3属性完成炫酷的H5动画效果</p>
              <p>熟悉Less等CSS预处理和模块化工具</p>
            </li>
            <li>
              <h3>JavaScript</h3>
              <p>熟悉原生 Javascript，能脱离 jQuery 等类库编码</p>
              <p>熟悉ES6新语法，能熟练使用常用ES6编码</p>
            </li>
          </ul>
        </div>
        <div class="content">
          <h1>个人项目</h1><hr />
          <h2>个人博客<a href="https://github.com/liulib/restful-blog-demo" target="__blank">地址图标</a></h2>
          <ul class="itemList">
            <li>
              <h3>项目描述</h3>
            </li>
            <li>
              <h3>项目技术</h3>
            </li>
            <li>
              <h3>项目成就</h3>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      contactInfo: {
        phone: 'MTU5NzMxMzM3MzQ=',
        email: 'bGl1bGlienpAMTYzLmNvbQ==',
        wechat: 'bGwzNDYwMDE4OQ==',
        qq: 'MzQ2MDAxODk='
      },
      handleFlag: true
    }
  },
  computed: {},
  watch: {},
  methods: {
    decodeBase64 (str) {
      // Going backwards: from bytestream, to percent-encoding, to original string.
      return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
    },
    handle64 () {
      if (this.handleFlag) {
        for (const key in this.contactInfo) {
          this.contactInfo[key] = this.decodeBase64(this.contactInfo[key])
        }
      }
      this.handleFlag = false
    }
  }
}

</script>
<style lang='less' scoped>
html {
  font-size: 16px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
      font-weight: bold;
  }

.space {
    margin-right:1em;
    }

.app {
  margin: 0 1rem;
}

.container {
  width: 80%;
  display: flex;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
}

@media only screen and(max-width: 960px) {
  .container {
    width: 100%;
  }
}

.leftSide {
  width: 330px;
  box-sizing: border-box;
  background-color: #42b983;
  flex: 0 0 auto;
  margin-right: 10px;
  color: #fff;
  .logo {
    text-align: center;
    padding: 2rem 0;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  }
  li {
    margin: 0.5rem;
    font-size: 1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  span {
    font-weight: bold;
  }
}

.infoTitle {
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: #00ffff;
  font-size: 1rem;
  position: relative;
  margin: 0 0 0 1rem;
  padding: 0 1rem;
  top: 0;
  left: 1rem;
}
.infoTitle::before {
  content: '';
  display: block;
  width: 1.5rem;
  height: 2.5rem;
  background-color: #00ffff;
  position: absolute;
  left: -1.45rem;
  clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
}
.infoTitle::after {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: #00ffff;
  position: absolute;
  bottom: -1rem;
  right: 0;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
}

.rigthSide {
  box-sizing: border-box;
  flex: 1 1 auto;
}

@media screen and (max-width: 640px) {
  .container {
    flex-flow: column;
  }
  .leftSide {
    width: 100%;
    border-radius: 4px;
  }
  .rigthSide {
    width: 100%;
    border-radius: 4px;
  }
}

.content {
  padding: 2rem 2rem 0 2rem;
  a {
    color: #42b983;
  }
  h1 {
    color: #273849;
    margin: 1rem 0;
  }
  h2 {
    color: #42b983;
    margin: 1rem 0;
  }
  .itemList {
    padding:0 1rem;
  }
}
</style>
