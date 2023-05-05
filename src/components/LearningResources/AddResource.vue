
<template>
  <base-dialog v-if="isInvalid" @close="close()" title="Invalid Input">
   <template #header></template>
   <template #default>
    <p>All Input Must Be Fill </p>
   </template>
   
<template #action>
   
          <base-button @click="close">Okay</base-button>

</template>
</base-dialog>
        <form class="form-control" @submit.prevent="submitData()">
            <label for="title">Title</label>
            <input id="title" type="text" name="title" ref="title">
            <label for="description">Description</label>
            <textarea id="description" ref="description" name="description" cols="30" rows="10"></textarea>
            <label for="link">Link</label>
            <input type="text" ref="link" style="margin-bottom:10px" id="link">
            <base-button type='submit'>Post</base-button>
        </form>
   
</template>
<script>
export default{
    data(){
        return {
            isInvalid:false
        }
    },
     emits: ['close'],
    inject:['addResource'],
    methods:{
        submitData(){
            const enterTitle = this.$refs.title.value;
            const enterDescription = this.$refs.description.value;
            const enterLinks = this.$refs.link.value;
            if(enterTitle.trim()===''||enterDescription.trim()===''||enterLinks.trim()===''){
               this.isInvalid=true;
            }
            else{
            
            this.addResource(enterTitle, enterDescription, enterLinks);

            }
        },
        close(){
            
            this.isInvalid=false;   
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>