async function main(params) {
    const {db} = params;

    await db.collection("example").doc("example").set({
        label:2
      })
      return "éxitosos"
}

module.exports = {
    main
}