export default {
    template: `
    <section>
    <h2 class="font-bold mb-2" v-show="assignments.length">{{title}}</h2>
    <ul>
        <li v-for="assignment in assignments" :key="assignment.id">
            <label>
                {{ assignment.name}}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    </ul>
    </section>
    <section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}