const Singleton = (function () {

    function TeamManager() {
        this.players = 22;
    }

    let tManager;

    function createTeamManager() {
        tManager = new TeamManager();
        return tManager;
    }

    return {
        getTeamManager: () => {
            if (!tManager) {
                tManager = createTeamManager()
            }
            return tManager;
        }
    }
})();

const teamManager = Singleton.getTeamManager();
const teamManager2 = Singleton.getTeamManager();

console.log(teamManager === teamManager2);
console.log(Singleton);