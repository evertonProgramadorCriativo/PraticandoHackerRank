 def gridChallenge(grid):
    sorted_grid = []
    for row in grid:
        sorted_row = sorted(row)
        sorted_grid.append(sorted_row)
    possible = "YES"
    columns = [list(column) for column in zip(*sorted_grid)]
    for column in columns:
        if column != sorted(column):
            possible = "NO"
            break
    return possible

    