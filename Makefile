SRC = $(wildcard lib/*.js) $(wildcard lib/plugins/*.js) \
	$(wildcard examples/*.js)
 
test: $(SRC)
	@node_modules/.bin/jshint $^
