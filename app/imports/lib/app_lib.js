export const AppLib = {}

AppLib.db = {

	handleDbError: (err) => {
		collection.catchValidationException(err)
    console.log('db error: ' + err.reason)
	},
	handleDbResult: (err, result) => err? handleDbError(err) : result

}