const directoryStructure = {
    "devops-directive-terraform-course": {
        "01-cloud-and-iac": {
            "README.md": null
        },
        "02-overview": {
            "main.tf": null,
            "README.md": null
        },
        "03-basics": {
            "aws-backend": {
                "main.tf": null
            },
            "README.md": null,
            "terraform-cloud-backend": {
                "main.tf": null
            },
            "web-app": {
                "architecture.png": null,
                "main.tf": null,
                "README.md": null
            }
        },
        "04-variables-and-outputs": {
            "examples": {
                "another-variable-file.tfvars": null,
                "main.tf": null,
                "outputs.tf": null,
                "README.md": null,
                "terraform.tfvars": null,
                "variables.tf": null
            },
            "web-app": {
                "main.tf": null,
                "outputs.tf": null,
                "terraform.tfvars": null,
                "variables.tf": null
            }
        },
        "05-language-features": {
            "README.md": null
        },
        "06-organization-and-modules": {
            "consul": {
                "main.tf": null,
                "README.md": null
            },
            "README.md": null,
            "web-app": {
                "main.tf": null
            },
            "web-app-module": {
                "compute.tf": null,
                "database.tf": null,
                "dns.tf": null,
                "main.tf": null,
                "networking.tf": null,
                "outputs.tf": null,
                "storage.tf": null,
                "variables.tf": null
            }
        },
        "07-managing-multiple-environments": {
            "file-structure": {
                "global": {
                    "main.tf": null
                },
                "production": {
                    "main.tf": null
                },
                "README.md": null,
                "staging": {
                    "main.tf": null
                }
            },
            "workspaces": {
                "main.tf": null,
                "README.md": null
            }
        },
        "08-testing": {
            "deployed": {
                "production": {
                    "main.tf": null
                },
                "README.md": null,
                "staging": {
                    "main.tf": null
                }
            },
            "examples": {
                "hello-world": {
                    "main.tf": null
                },
                "README.md": null
            },
            "modules": {
                "hello-world": {
                    "instance.tf": null,
                    "README.md": null
                },
                "README.md": null
            },
            "tests": {
                "bash": {
                    "hello_world_test.sh": null
                },
                "README.md": null,
                "static": {
                    "README.md": null
                },
                "terratest": {
                    "go.mod": null,
                    "go.sum": null,
                    "hello_world_test.go": null,
                    "README.md": null
                }
            }
        },
        "09-developer-workflows": {
            "README.md": null
        },
        "README.md": null
    }
};

function createTreeView(structure, parentElement) {
    for (const [key, value] of Object.entries(structure)) {
        const item = document.createElement('div');
        const icon = document.createElement('span');
        icon.className = 'icon';
        item.appendChild(icon);

        const text = document.createTextNode(key);
        item.appendChild(text);

        if (value === null) {
            item.className = 'file';
        } else {
            item.className = 'folder collapsed';
            const subDirectory = document.createElement('div');
            subDirectory.className = 'directory';
            createTreeView(value, subDirectory);
            item.appendChild(subDirectory);

            item.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('collapsed');
                this.classList.toggle('open');
            });
        }

        parentElement.appendChild(item);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const treeContainer = document.getElementById('directory-tree');
    createTreeView(directoryStructure, treeContainer);
});
