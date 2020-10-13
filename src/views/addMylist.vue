<template>
  <div class="add_my_list">
    <h1>{{title}}</h1>
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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{saveTitle}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
        title: '新增人员',
        saveTitle: '创建人员',
        imageUrl: ''
      }
    },
    computed: {
      ...mapState({
        form: state => state.home.form,
      })
    },
    created(){   
      if (this.$route.params.row) {
        Object.assign(this.form, this.$route.params.row)
        this.title = '编辑人员'
        this.saveTitle = '修改人员'
      }
    },
    methods: {
      ...mapActions('home',['addMyListA','updateListA']),
      onSubmit() {
        if (this.$route.params.row) {
          this.updateListA()
        } else {
          this.addMyListA()
        }
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
    }
  }
</script>

<style>
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
