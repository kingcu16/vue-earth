<template>
  <el-conainer>
    <div id="app">
      <router-view id="content" />
    </div>
  </el-conainer>
</template>

<style>
body{
  margin: 0;
  border: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
