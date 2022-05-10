// useApi(() => {
//     fetch("./gp-api.json");
// });

// export default useApi;

export async function getAllTracks() {
    try {
        const response = await fetch("../gp-api.json");
        console.log(response.json());
        return await response.json();
    } catch (error) {
        return [];
    }
}
