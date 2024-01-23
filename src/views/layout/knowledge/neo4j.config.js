export default {
  containerId: "viz",
  neo4j: {
    serverUrl: "bolt://172.20.137.140:7687",
    serverUser: "neo4j",
    // serverPassword: "sorts-swims-burglaries",
    serverPassword: "123456"
  },
  labels: {
    Department: {
      label: "name",
      // community: "community",
      group: "name"
      // font: { size: 20 }, // 节点字体大小
      // size: 100,           // 节点大小
      // color: '#EE2233'    // 节点颜色
    },
    Producer: {
      label: "name", //对应数据库中的名字
      // caption: "name",
      community: "name", 
      size: 200, 
      font: { 
        size: 100,
        color: "#DA7194", 
      }
    },
    // 食物图数据节点
    third_level_food: {
      label: "name",
    },
    Check: {
      label: "name",
    },
    Disease: {
      label: "name",
    },
    Drug: {
      label: "name",
    },
    Food: {
      label: "name",
    },
    Symptom: {
      label: "name",
    },
    amino_acid: {
      label: "name",
    },
    base_nutrition: {
      label: "name",
    },
    effect: {
      label: "name",
    },
    first_level_food: {
      label: "name",
    },
    lipid: {
      label: "name",
    },
    minerals: {
      label: "name",
    },
    second_level_food: {
      label: "name",
    },
    vitamin: {
      label: "name",
    },
  },
  relationships: {
    HasEffect: {
      // label: HasEffect
    },
    HasFirstSubFood: {
      // label:
    },
    HasSecondSubFood: {
      // label:
    },
    acompany_with: {
      // label:
    },
    belongs_to: {
      label: "name"
    },
    common_drug: {
      label: "name"
    },
    do_eat: {
      label: "name"
    },
    drugs_of: {
      label: "name"
    },
    has_symptom: {
      label: "name"
    },
    need_check: {
      label: "name"
    },
    no_eat: {
      label: "name"
    },
    recommand_drug: {
      label: "name"
    },
    recommand_eat: {
      label: "name"
    },
    亮氨酸: {
      // label: "name"
    },
    单不饱和脂肪酸: {
      // label:
    },
    反式脂肪酸: {
      // label:
    },
    反式脂肪酸占总脂肪酸的比例: {
      // label:
    },
    叶黄素类: {
      // label:
    },
    多不饱和脂肪酸: {
      // label:
    },
    多不饱和脂肪酸占总脂肪酸的比例: {
      // label:
    },
    异亮氨酸: {
      // label:
    },
    植物固醇: {
      // label:
    },
    氟: {
      // label:
    },
    氯: {
      // label:
    },
    番茄红素: {
      // label:
    },
    硫: {
      // label:
    },
    碘: {
      // label:
    },
    硒: {
      // label:
    },
    碳水化合物: {
      // label:
    },
    磷: {
      // label:
    },
    粗纤维: {
      // label:
    },
    组氨酸: {
      // label:
    },
    维生素A: {
      // label:
    },
    维生素B12: {
      // label:
    },
    // 维生素B14（甜菜碱）: {
    //   // label:
    // },
    // 维生素B1（硫胺素）: {
    //   // label:
    // },
    // 维生素B2（核黄素）: {
    //   // label:
    // },
    // 维生素B3（烟酸）: {
    //   // label:
    // },
    // 维生素B4（胆碱）: {
    //   // label:
    // },
    // 维生素B5（泛酸）: {
    //   // label:
    // },
    维生素B6: {
      // label:
    },
    // 维生素B7（生物素）: {
    //   // label:
    // },
    // 维生素B9（叶酸）: {
    //   // label:
    // },
    维生素C: {
      // label:
    },
    维生素D: {
      // label:
    },
    维生素E: {
      // label:
    },
    维生素K: {
      // label:
    },
    // 维生素P（类黄酮）: {
    //   // label:
    // },
    缬氨酸: {
      // label:
    },
    胆固醇: {
      // label:
    },
  },
  arrows: true,
  // labels: {
  // 	Character: {
  // 		label: "name",
  // 		value: "pagerank",
  // 		group: "community"
  // 	}
  // },
  // relationships: {
  // 	INTERACTS: {
  // 		value: "weight"
  // 	}
  // },
  // initialCypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m"
  initialCypher: "MATCH p=()-[r:do_eat]->() RETURN p LIMIT 25",
  option: [
    {
      value: 'MATCH (n:Food) RETURN n LIMIT 25',
      label: '检索前25个食物节点'
    },
    {
      value: 'MATCH p=()-[r:`亮氨酸`]->() RETURN p LIMIT 25',
      label: '检索含有亮氨酸的前25个关系节点'
    },
    {
      value: 'MATCH p=()-[r:HasEffect]->() RETURN p LIMIT 100',
      label: '小麦胚粉影响的前25个疾病'
    },
    {
      value: 'MATCH p=()-[r:need_check]->() RETURN p LIMIT 25',
      label: '需要做哪些检查'
    },
    {
      value: 'MATCH p=()-[r:acompany_with]->() RETURN p LIMIT 100',
      label: '疾病的并发症的前100条'
    },
    {
      value: 'MATCH p=()-[r:acompany_with]->() RETURN p LIMIT 100',
      label: '疾病适合吃什么前100条'
    },
    {
      value: 'MATCH p=()-[r:recommand_eat]->() RETURN p LIMIT 100',
      label: '推荐吃的食物100条'
    },
    {
      value: 'MATCH p=()-[r:recommand_drug]->() RETURN p LIMIT 100',
      label: '推荐药物前100条'
    },
    {
      value: 'MATCH p=()-[r:recommand_drug]->() RETURN p LIMIT 100',
      label: '疾病的症状前100条'
    },
    {
      value: 'MATCH p=()-[r:`维生素D`]->() RETURN p LIMIT 100',
      label: '含有维生素D的食物前100条'
    },
    {
      value: 'MATCH p=()-[r:`维生素A`]->() RETURN p LIMIT 100',
      label: '含有维生素A的食物前100条'
    },
    {
      value: 'MATCH p=()-[r:`番茄红素`]->() RETURN p LIMIT 100',
      label: '含有番茄红素的食物前100条'
    }
  ]
}