export const SettingConfig = {
    /**
     * Automatically generated input Form settings
     *   name: The name attribute of the input tag. Must be unique in the whole.
     *   component: Component name that defines the input field.
     *   options: Auxiliary setting for Component that generates input field. For example, give a choice of radio buttons and checkboxes.
     *   default: Given as an input value if the initial value of values is undefined.
     *   category: Group of input fields. Only certain categories should be displayed by user input.
     *   category2: Subgroup within category. If the same category2 is consecutive, the caption is given only at the beginning.
     * @type Array<Object>
     */
    settingItemsConfig: [
        {name: 'drink', category:'food', component: 'RadioType', options:'Drinks', caption:"Drinks", description:"Drinks you often drink", default:'0'},
        {name: 'snack', category:'food', component: 'RadioType',  options:'Snacks', caption:"Snacks", description:"Snacks you often eat", default:'1'},
        {name: 'complexity', category:'game', component: 'RadioType',  options:'Complexity', caption:"Complexity", description:"Complexity to challange", default:'1'},
        {name: 'nickname', category:'game', category2:'box2', component: 'TextType',  options:'NameText', caption:"Game Nick Name", description:"Your nick name in the game", default:'Admin'},
        {name: 'hand', category:'game', category2:'box2', component: 'SelectType', options:'Arms', caption:"Dominant arm", description:"Your dominant arm", default:'1', min:0, max:100},
    ],

    /**
     * Auxiliary configuration given to the component
     * @type Object
     */
     componentConfig: {
        Drinks: {
            choices: [
                {value:'0', idsub:'radio-0', caption:"Coffee"},
                {value:'1', idsub:'radio-1', caption:"Tea"},
                {value:'2', idsub:'radio-2', caption:"Coke"},
            ]
        } ,
        Snacks: {
            choices: [
                {value:'0', idsub:'radio-0', caption:"Biscuits"},
                {value:'1', idsub:'radio-1', caption:"Crisps"},
                {value:'2', idsub:'radio-2', caption:"Chocolate"},
            ]
        } ,
        Complexity: {
            choices: [
                {value:'1', idsub:'radio-0', caption:"Easy"},
                {value:'2', idsub:'radio-1', caption:"Normal"},
                {value:'3', idsub:'radio-2', caption:"Hard"},
                {value:'4', idsub:'radio-3', caption:"Nightmare"},
            ]
        },
        Arms: {
            choices: [
                {value:'1', idsub:'option-0', caption:"Right hand"},
                {value:'2', idsub:'option-1', caption:"Left hand"},
                {value:'3', idsub:'option-2', caption:"Both hands"},
            ]
        },
        NameText: {
        },
    },

    /**
     * Define categories, provide information to users, and provide category-based filtering capabilities
     * @type Array<Object>
     */
    categoryConfig: [
        {name: undefined, caption:"All", description:"All items"},
        {name: 'food', caption:"Food", description:"Your food"},
        {name: 'game', caption:"Game", description:"Your game"}
    ],

    /**
     * Define sub-categories
     * @type Array<Object>
     */
    category2Config: [
        {name: 'box1', category: 'box', caption:"Box1", description:"Box group 1"},
        {name: 'box2', category: 'box', caption:"Box2", description:"Box group 2"},
    ],
}