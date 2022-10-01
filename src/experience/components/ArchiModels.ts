import Experience from "../Experience";
import * as THREE from 'three'

export default class ArchiModel {

    experience: Experience
    resources: any
    scene: THREE.Scene
    item: any

    constructor() {

        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene

        this.setModel()
    }

    setModel(): void {
        
        this.item = {}
        this.item.model = this.resources.items.archiModelLight.scene
        this.scene.add(this.item.model)
        this.item.material = new THREE.MeshBasicMaterial({ color: '#99b5ff'})

        this.item.model.traverse((_child: { material: any }) => {
            if (_child instanceof THREE.Mesh) {
                _child.material = this.item.material
            }
        })
    }
}