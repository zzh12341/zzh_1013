<template>
  <div class="home">

    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-select v-model="searchFrom.userId" clearable filterable  placeholder="请选择">
          <el-option v-for="(label, value) in dropData" :key="value" :label="label" :value="value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
        <el-button type="primary" @click="search(1)">查询</el-button>
        <el-button type="primary" @click="clearform()" plain>清空搜索</el-button>
        <el-button type="danger" @click="delSubmit" plain>批量删除</el-button>
        <el-button type="primary" @click="exportDataA" plain>导出</el-button>
        <el-button type="primary" @click="addialogVisible" plain>新增</el-button>
      </el-form-item>
    </el-form>

     <el-table :data="myListData" border stripe class="home_table" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="code" label="CODE" min-width="140"></el-table-column>
        <el-table-column prop="name" :label="$t('home.name')" min-width="120"></el-table-column>
        <el-table-column prop="password" :label="$t('home.passWorde')" min-width="120"></el-table-column>
        <el-table-column  :label="$t('home.imgA')" min-width="140">
          <template slot-scope="scope">
            <img :src="scope.row.photoUrl" class="auter_img">
          </template>
        </el-table-column>

        <el-table-column  :label="$t('home.options')" min-width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="mini" plain>编辑</el-button>
            <!-- <el-button type="danger" size="mini" plain @click="deleteListA(scope.row.id)">删除</el-button> -->
              <el-button type="danger" size="mini" plain @click="delUser(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    <!-- <Pagination v-model="searchFrom.pagingDto" @onSearch="myListA()"></Pagination> -->
    <Pagination v-model="searchFrom.pagingDto" @onSearch="search()"></Pagination>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="40%" :before-close="()=>{dialogVisible = false}">
       <div class="add_my_list">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="CODE">
            <el-input v-model.number="form.code" placeholder="请输入CODE"></el-input>
          </el-form-item>
          <el-form-item label="名字">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="url">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:8769/demo/user/data/uploadImg"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>
<script>
  import {mapState, mapActions} from "vuex";
  import Pagination from "../components/Pagination"
  import axios from "axios"
  export default {
    components: {Pagination},
    data() {
      return {
        listId: [],
        dialogVisible: false,

        //彈框
        title: '新增人员',
        imageUrl: ''
      }
    },
    mounted () {
      this.myListA()
      this.dropListA()
    },
    computed: {
      ...mapState({
      searchFrom: state => state.home.searchFrom,
       retsearchFrom: state => state.home.retsearchFrom,
      myListData: state => state.home.myListData,
      dropData: state => state.home.dropData,
      form: state => state.home.form,
    })
  },
    methods: {
      ...mapActions('home',['myListA', 'dropListA', 'searchOneA', 'deleteListA', 'exportDataA', 'addMyListA','updateListA']),
      handleClick (row) {
        //編輯跳轉
        // this.$router.push({name: 'addMylist', params:{row}})
        Object.assign(this.form, row)
        this.imageUrl = row.photoUrl
        this.title = '编辑人员'
        this.dialogVisible = true
      },
      // onSubmit () {
      //   this.searchFrom.pagingDto.pageNo = 1
      //   this.myListA()
      // },
      //查询
     search(val) {
      if (val) {
        this.searchFrom.pagingDto.pageNo = val;
      }
      this.myListA();
    },
      handleSelectionChange (val){
        this.listId = val.map(L=>L.id)
      },

      //清空搜索
     clearform() {
      this.dataValue = [];
      Object.assign(this.searchFrom, this.retsearchFrom);
    },
      delSubmit () {
        axios.post(`http://localhost:8769/demo/user/deleteBatch?listId=${this.listId}`)
        .then(res =>{
          this.$notify({ title: '成功', message: res.data.msg, type: 'success'});
          this.myListA()
        })
        .catch(err=>{
          this.$notify({ title: '失败', message: err.responses.data.msg, type: 'error'});
        })
      },
         delUser(id){
 this.$confirm("确定删除此用户吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.deleteListA(id);
      });
      },

      // 彈框
      addialogVisible () {
        this.form.id= '',
        this.form.code= '',
        this.form.name= '',
        this.form.password= '',
        this.form.photoUrl= '',
        this.title == '新增人员'
        this.dialogVisible = true
      },
      addSubmit() {
        if (this.title == '编辑人员') {
          this.updateListA()
        } else {
          this.addMyListA()
        }
        this.dialogVisible = false
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.form.photoUrl = res.obj.savePath
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
     },
  };
</script>
<style>
  .home_heade{
    text-align: right;
  }
  .home_table{
    margin-top: 15px;
  }



  .auter_img{
    width: 135px;
    height: 25px;
  }
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px !important;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

