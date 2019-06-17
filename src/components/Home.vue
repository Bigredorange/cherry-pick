<template>
    <div>
        <div>
            <el-table
                :data="tableLeft"
            >
              <el-table-column
                type="selection"
                align="center"
              />
              <el-table-column
                label="提交记录"
                prop="message"
                align="center"
              />
              <el-table-column
                label="提交人"
                prop="person"
                align="center"
              />
              <el-table-column
                label="提交时间"
                prop="time"
                align="center"
              />
            </el-table>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableLeft: [],
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
