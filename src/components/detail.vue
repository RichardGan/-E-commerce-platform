<template>
  <div>
    <Header></Header>
    <Footers></Footers>
  </div>
</template>
<script>
import Header from '@/common/Header'
import Footers from '@/common/Footers'
export default {
  name: 'detail',
  props:{
    list: Array
  },
  components:{
    Header,
    Footers
  }
}
</script>
<style>

</style>
