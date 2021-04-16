<template>
  <ion-page class="ion-page page">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="light">
            <ion-icon :icon="chevronBack"></ion-icon>
            &nbsp;Employee List
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
  
      <div class="mainContent">
        <ion-card-subtitle>{{ results.length }} {{ (results.legnth === 1) ? "employee" : "employees" }} found</ion-card-subtitle>
        <ion-searchbar @keyup="search($event)" @keypress="search($event)" placeholder="Search..." icon="search" show-cancel-button="never" />

        <ion-list>
          <ion-item :id="'employeeItem_' + employee.id" v-for="employee in results" :key="employee.id" class="employeeItem animate__animated animate__fadeIn" lines="none">
            <img :src="employee.avatar" alt="employee avatar" />

            <ion-label>
              <h2>{{ employee.name }}</h2>
              <p>{{ employee.title }}</p>
            </ion-label>

            <ion-button @click="remove(employee.id)">
              <ion-icon :icon="trashOutline" />
            </ion-button>
          </ion-item>
        </ion-list>
      </div>

    </ion-content>

    <ion-footer>
      <ion-button expand="block">Add new employee</ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonToolbar } from '@ionic/vue';
import { chevronBack, trashOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonButtons,
    IonCardSubtitle,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonSearchbar,
    IonToolbar
  },
  setup() {
    const employees = ref([
      {
        id: 1,
        name: "Mark Beech",
        title: "Senior Web Developer",
        avatar: "https://pbs.twimg.com/profile_images/378800000775628335/857bcaffb820e5b6bdd2e83a4b56cf89_400x400.jpeg"
      },
      {
        id: 2,
        name: "Alan Montgomery",
        title: "Mobile Team Lead",
        avatar: "https://pbs.twimg.com/profile_images/1349059994747076610/8dWvipvu_400x400.jpg"
      },
      {
        id: 3,
        name: "Max Lynch",
        title: "CEO | Co Founder",
        avatar: "https://pbs.twimg.com/profile_images/1318970727173885953/bln98FNj_400x400.jpg"
      },
      {
        id: 4,
        name: "Mike Hartington",
        title: "Senior Dev Rel",
        avatar: "https://pbs.twimg.com/profile_images/1084993841898446849/DJ8XtR6L_400x400.jpg"
      },
      {
        id: 5,
        name: "Matt Netkow",
        title: "Head of Product Marketing",
        avatar: "https://pbs.twimg.com/profile_images/1323383930150621187/GKc0nVzi_400x400.jpg"
      },
      {
        id: 6,
        name: "Ben Sperry",
        title: "CDO | Co Founder",
        avatar: "https://pbs.twimg.com/profile_images/1328390491126308864/jHHgl5Dm_400x400.jpg"
      },
      {
        id: 7,
        name: "Liam DeBeasi",
        title: "Software Engineer",
        avatar: "https://pbs.twimg.com/profile_images/1105953692669366273/ZNK4lRAJ_400x400.jpg"
      }
    ])

    const results = ref(employees.value)

    const remove = (id: any) => {
      document.getElementById(`employeeItem_${ id }`)?.classList.add("animate__slideOutRight")

      setTimeout(() => {
        const tempEmployees = employees.value
        const newEmployees = tempEmployees.filter(e => e.id !== id)
        results.value = newEmployees
        employees.value = newEmployees
      }, 700)
    }

    const search = (e: any) => {
      const searchTerm = e.currentTarget.value;

      if (searchTerm !== "") {
        const searchTermLower = searchTerm.toLowerCase()
        const newResults = employees.value.filter(e => e.name.toLowerCase().includes(searchTermLower))
        results.value = newResults
      } else {
        results.value = employees.value
      }
    }

    return { employees, results, search, remove, chevronBack, trashOutline }
  }
})
</script>

<style lang="scss">
.page {

  ion-header {

    background-color: #5a55ca;
  }

  ion-toolbar {

    --border-style: none;
    --background: #5a55ca;
    --color: white;
    --min-height: 8rem;

    // --stripe: #645fd1;
    --stripe: #5a55ca;
    --bg: #645fd1;
    --background: transparent;
    background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, var(--bg) 25%, transparent 25%),
      linear-gradient(45deg, var(--bg) 25%, transparent 25%);
    background-size: 100px 100px;
    background-color: var(--stripe);

    ion-button {
      font-size: 1.2rem;
      font-weight: 800;
    }
  }

  ion-content {
    --background: #5a55ca;
    overflow: hidden;
  }

  ion-card-subtitle {
    padding-left: 1.2rem;
    margin-top: 1.9rem;
    padding-bottom: 0.3rem;
    --color: #5a55ca;
  }

  ion-searchbar {
    --border-radius: 10px;
    --background: white;
    --color: black;
    min-height: 5rem;
    padding: 1rem;
    padding-top: 0;
    margin-top: -1rem;
  }

  ion-list {
    background-color: #e7edfb;
  }

  ion-footer {
    background-color: #e7edfb;
    padding: 1rem;

    ion-button {
      --background: #5a55ca;
      --background-focused: #6f6bbb;
      --background-activated: #6f6bbb;
      --padding-top: 1rem;
      --padding-bottom: 1rem;
      --padding-start: 0.75rem;
      --padding-end: 0.75rem;
      height: 3.5rem;
      font-weight: 700;
    }
  }
}

.mainContent {
  background-color: #e7edfb;
  height: 100%;
  width: 100%;
  overflow: scroll !important;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.employeeItem {
  --border-radius: 10px;
  --padding-start: 1rem;
  --padding-end: 1rem;
  --padding-top: 1rem;
  --padding-bottom: 1rem;
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  min-height: 5rem;

  img {
    width: 3rem;
    border-radius: 10px;
    border: 2px solid #e7edfb;
  }

  ion-label {
    padding-left: 1.2rem;

    h2 {
      font-weight: 600;
      letter-spacing: -0.02rem;
    }

    p {
      letter-spacing: -0.03rem;
    }
  }

  ion-button {
    --background: #5a55ca;
    --background-focused: #6f6bbb;
    --background-activated: #6f6bbb;
    --padding-top: 1rem;
    --padding-bottom: 1rem;
    --padding-start: 0.75rem;
    --padding-end: 0.75rem;
    margin-top: -0.2rem;
  }
}
</style>