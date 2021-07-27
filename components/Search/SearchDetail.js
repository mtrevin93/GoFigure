const getFigParts = (fig) => {
    const figNum = getFigNum(fig)
    figNum.results.map(fig => {
        types.find(type => (part.part_cat_id === type.id))
        const part = {
            "userId": parseInt(sessionStorage.getItem("GoFigure_user")),
            "rebrickableId": part.part_num,
            "typeId":types.find(type => part.part_cat_id===type.rebrickableId).id,
            "img": part.part_img_url,
            "name": part.name
        }
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(part)
            })
    })
    .then(getParts)
}