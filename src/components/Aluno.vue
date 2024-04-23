<template>
  <div>
    <Titulo title="Tarefas" />
   
    <small v-if="isError" class="form-text  text-danger">  <b-icon icon="cloud-slash-fill" variant scale></b-icon> Erro inesperado com o servidor, tente mais tarde!</small>

    <div class="form-group col-4">
      <label for="nomeTask">Nome</label>
      <input type="text" class="form-control mb-1" v-on:keyup.enter="addAluno()" v-model="task.name">
      <label for="descTask">Descrição</label>
      <textarea class="form-control mb-1" v-model="task.description"></textarea>
      <button type="button" class="btn btn-success mb-5 mr-5" @click="CreateTask()">
        <b-icon icon="file-plus" variant scale></b-icon>
        Adicionar
      </button>

    </div>



    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody v-if="tasks.length">
        <tr v-for="item in tasks" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>

            <button type="button" class="btn btn-outline-danger" @click="deleteTask(item)">Remover</button>
            <button type="button" class="btn btn-outline-warning ml-5" @click="getTaskById(item.id)">
              <b-icon icon="file-plus" variant scale></b-icon>
              Editar
            </button>

          </td>
        </tr>

      </tbody>
      <tfoot v-else class="d-flex align-items-center gap-5 p-3" >
          <b-icon icon="lightbulb-off-fill" variant scale="2"></b-icon>
          <span>Nenhum aluno encontrado</span>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from '@/components/Titulo'
export default {
  name: 'PaginaAlunos',
  data() {
    return {
      nome: '',
      isError: false,
      alunos: [],
      tasks: [],
      task: {
        "id": 0,
        "name": "",
        "description": "",
        "desenvolvedorId": 1
      },
      response: '',
      baseUrl: 'https://api-tarefa-teste.azurewebsites.net/api/v1/MyTasks',
      baseUrlLocal:'https://localhost:7086/api/v1/MyTasks'


    }
  },
  props: {
    msg: String
  },
  components: {
    Titulo
  },
  methods: {
    async addAluno() {
      if (this.nome.trim() == '') return

      let r = (Math.random() * (100 - 1) + 1)
      let a = {
        Nome: this.nome,
        Mat: (Math.random() * (1000000 - 1000) + 1).toFixed(),
        id: r.toFixed()
      }

      await this.$http
        .post("http://localhost:3000/alunos", a)
        .then(res => res.json());
      this.nome = ''
      this.refreshTable()
    },
    async removeAluno(a) {
      /* let indice = this.alunos.indexOf(a)
      this.alunos.splice(indice, 1) */

      await this.$http
        .delete(`http://localhost:3000/alunos/${a.id}`)

      this.refreshTable()
    },
    refreshTable() {
      this.$http
        .get("http://localhost:3000/alunos")
        .then(res => res.json())
        .then(alunos => this.alunos = alunos)
    },
    //-------------------------- TASKS ---------------------
    async getTask() {

      try {
        
        await this.$http
          .get(this.baseUrl)
          .then(res => res.json())
          .then(tasks => this.tasks = tasks)
      } catch (error) {
        this.isError= true
      }

    },
    async getTaskById(id) {
      await this.$http
        .get(`${this.baseUrl}/${id}`)
        .then(res => res.json())
        .then(t => {
          this.task.id = t.id
          this.task.name = t.name
          this.task.description = t.description

        })
        console.log(this.task)
    },
    async CreateTask() {

      try {
        
        if (this.task.name.trim() == '') {
          alert('Nome obrigatório')
          return
        }
        await this.$http
          .post(this.baseUrl, this.task)
          .then(res => res.json())
          .then(obj => this.response = obj)
  
        console.log(this.response.id)
  
  
        this.task.name = ''
        this.task.description = ''
        this.getTask()
      } catch (error) {
        this.isError= true
      }

    },
    async deleteTask(t) {
     
      await this.$http
        .delete(`${this.baseUrl}?id=${t.id}`)

      this.getTask()

    },

  },
  //----------------- CICLO DE VIDA METODOS --------------
  created() {
    /* this.$http
      .get("http://localhost:3000/alunos")
      .then(res => res.json())
      .then(alunos => this.alunos = alunos) */
    //this.refreshTable()
    this.getTask()

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
