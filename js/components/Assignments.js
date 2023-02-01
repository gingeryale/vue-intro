import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `<assignment-list 
    :assignments="inProgressAssignments" 
    title="In Progress">
    </assignment-list>,
    <assignment-list 
    :assignments="completedAssignments" 
    title="Completed">
    </assignment-list>`
    //     <section>
    //     <h2 class="font-bold mb-2" v-show="inProgressAssignments.length">In Progress</h2>
    //     <ul>
    //         <li v-for="task in inProgressAssignments" :key="task.id">
    //             <label>
    //                 {{ task.name}}
    //                 <input type="checkbox" v-model="task.complete">
    //             </label>
    //         </li>
    //     </ul>
    //     </section>
    //     <section>
    //     <div v-show="completedAssignments.length">
    //         <h2 class="font-bold mb-2 mt-4">Done</h2>
    //         <ul>
    //             <li v-for="task in completedAssignments" :key="task.id">
    //                 <label>
    //                     {{ task.name}}
    //                     <input type="checkbox" v-model="task.complete">
    //                 </label>
    //             </li>
    //         </ul>
    //     </div>
    // </section>
    ,
    data() {
        return {
            assignments: [
                {
                    name: 'Finish project',
                    complete: false,
                    id: 1
                }, {
                    name: 'Pay credit card',
                    complete: false,
                    id: 2
                }, {
                    name: 'Pet food store',
                    complete: false,
                    id: 3
                }
            ]
        }
    },
    computed: {
        inProgressAssignments() {
            return this
                .assignments
                .filter(a => !a.complete);
        },
        completedAssignments() {
            return this
                .assignments
                .filter(a => a.complete);
        }
    }
};