<template>
  <div id="app">
    <header class="navbar clearfix">
      <nav>
        <!-- 文字logo部分 -->
        <div class="site-name">琉璃B的博客</div>
        <!-- 导航栏部分 -->
        <div class="site-navbar clearfix">
          <ul>
            <li>
              <form id="search-form" action>
                <input type="text" placeholder="搜索暂时还没搞定~" class="search-query" />
              </form>
            </li>

            <li class="nav-dropdown-container">
              <a href="/">首页</a>
            </li>

            <li class="nav-dropdown-container">
              <a href="#">分类</a>
              <ul class="nav-dropdown">
                <li>
                  <ul>
                    <li :key="item.id" v-for="item in category">
                      <a @click.prevent="sendCategory(item.id)">{{item.name}}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-dropdown-container">
              <a href="#">热门</a>
            </li>
            <li class="nav-dropdown-container">
              <a href="#/about">关于</a>
            </li>
            <li class="nav-dropdown-container">
              <a href="#/resume">简历</a>
            </li>
            <li class="nav-dropdown-container">
              <a href="#">登陆</a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- 隐形导航栏 -->
      <div class="sidebar">
        <nav class="nav-links">
          <div class="nav-item" :key="item.id" v-for="item in category">
            <a :href="'#/category/' + item.id ">{{item.name}}</a>
          </div>
        </nav>
      </div>
      <div class="sidebar-button">菜单</div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'l-header',
  data: function() {
    return {
      category: ''
    }
  },
  methods: {
    async getCatogoryData() {
      try {
        const res = await this.$api.operations.fetchCategory()
        this.category = res.result
      } catch (error) {
        alert(error)
      }
    },
    sendCategory(val) {
      this.$emit('getCate', val)
    }
  },
  created() {
    this.getCatogoryData()
  }
}
</script>
<style lang="less" scoped>
@base-color: #42b983;

.navbar {
  height: 61px;
  width: 100%;
  line-height: 61px;
  padding: 0 100px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #eaecef;
  background-color: #fff;
  box-sizing: border-box;
}

.site-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  float: left;
  box-sizing: border-box;
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .site-name {
    display: none;
  }
}

.site-navbar {
  float: right;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media only screen and (max-width: 768px) {
  .site-navbar {
    display: none;
  }
}

.search-query {
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 15px 0 30px;
  border: 1px solid #e3e3e3;
  color: #273849;
  outline: none;
  border-radius: 15px;
  margin-right: 10px;
  transition: border-color 0.2s ease;
  vertical-align: middle !important;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-dropdown-container {
  position: relative;
}

.nav-dropdown-container:hover {
  border-bottom: 3px solid #42b983;
}

nav ul li:hover .nav-dropdown {
  display: block;
}

nav ul li {
  float: left;
  margin: 0px 0.5rem;
}

nav li a {
  text-decoration: none;
  color: #304455;
}

.nav-dropdown {
  display: none;
  box-sizing: border-box;
  max-height: calc(100vh - 61px);
  overflow-y: auto;
  position: absolute;
  top: 100%;
  right: -15px;
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-bottom-color: #ccc;
  text-align: left;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
}

.nav-dropdown a:hover {
  color: #42b983;
}

.sidebar {
  display: none;
  font-size: 16px;
  background-color: #fff;
  width: 10rem;
  padding-left: 2rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
}

.sidebar-button {
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  background: #42b983;
  font-size: 12px;
  opacity: 1;
  color: #fff;
  cursor: pointer;
  text-align: center;
  transition-property: bottom;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  /* box-sizing: border-box; */
}

@media only screen and (max-width: 768px) {
  .sidebar-button {
    display: block;
  }
}
</style>
