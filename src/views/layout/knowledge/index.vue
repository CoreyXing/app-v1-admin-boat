<template>
    <div class="myDiv">
        <el-form label-width="10%" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="16">
                    <el-form-item label="Cypher:">
                            <el-input type="textarea" :rows="2" v-model="formInline.input" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item class="btn">
                        <el-button type="primary" icon="el-icon-search" @click="submit">搜索</el-button>
                        <el-button type="primary" icon="el-icon-check" @click="draw">获取全图</el-button>
                        <el-button type="primary" icon="el-icon-check" @click="stabilize">stabilize</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div id="viz"></div>
    </div>
</template>

<script>

export default {
    name: 'knowledge',
    data() {
        return {
            formInline: {
                input: '',
            },            
            viz: {}, //定义一个viz对象,
        }
    },
    mounted() {
    },
    methods: {
        submit() { 
            let cypher = this.formInline.input;

            if (cypher.length > 3) {
                this.viz.renderWithCypher(cypher);
            } else {
                console.log("reload");
                this.viz.reload();
            }
        },
        stabilize() {
            this.viz.stabilize();
        },
        draw() {
            var config = {
				containerId: "viz",
				neo4j: {
					serverUrl: "bolt://localhost:7687",
					serverUser: "neo4j",
					serverPassword: "sorts-swims-burglaries"
				},
				labels: {
					Character: {
						label: "name",
						value: "pagerank",
						group: "community"
					}
				},
				relationships: {
					INTERACTS: {
						value: "weight"
					}
				},
				initialCypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m"
                // initialCypher: "MATCH (n) RETURN n"
			};
            this.viz = new NeoVis.default(config);
            this.viz.render();
        }
    },
}
</script>
<style lang="less" scoped>
.myDiv {
    width: 100%;
    height: 800px;
}
#viz {
    width: 100%;
    height: 80%;
    border: 1px solid #000;
    font: 22pt arial;
}

</style>