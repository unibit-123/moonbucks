function App() {

    document.querySelector("#espresso-menu-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("menu-edit-button")) {
            const $menuName = e.target.closest("li").querySelector(".menu-name")
            const updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerText);
            $menuName.innerText = updatedMenuName;
        }
    });

    document.querySelector("#espresso-menu-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    const addMenuName = () => {
        if(document.querySelector("#espresso-menu-name").value ==="") {
            alert("메뉴를 입력해주세요;");
            return;
        }
            const espressoMenuName = document.querySelector("#espresso-menu-name").value;
            const menuItemTemplate = (espressoMenuName) => {
                return `
                <li class="menu-list-item d-flex items-center py-2">
                <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                >
                    수정
                </button>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                >
                    삭제
                </button>
                </li>`;
        };
        // 추가된 메뉴가 뒤쪽으로 추가됨
        document.querySelector("#espresso-menu-list").insertAdjacentHTML("beforeend", menuItemTemplate(espressoMenuName));
        // 총 개수 바꿔줌
        const menuConut = document.querySelector("#espresso-menu-list").querySelectorAll("li").length
        document.querySelector(".menu-count").innerText = `총 ${menuConut}개`;
        document.querySelector("#espresso-menu-name").value = "";
    };

    document.querySelector("#espresso-menu-submit-button").addEventListener("click", () => {
        addMenuName();
    });

    document.querySelector("#espresso-menu-name").addEventListener("keypress", (e) => {
        if (e.key !=="Enter") {
            return;
        }   
        addMenuName();
    });
}

App();