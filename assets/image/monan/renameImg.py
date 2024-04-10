import os

def rename_files_in_directory(directory, name):
    try:
        # List all files in the directory
        files = os.listdir(directory)
        
        # Loop through each file
        i = 0
        for file in files:
            # Check if the file ends with the old suffix
                # Construct the new file name by replacing the old suffix with the new suffix
                new_name = f'{name}_{i}.png'
                i += 1
                
                # Rename the file
                os.rename(os.path.join(directory, file), os.path.join(directory, new_name))
                print(f"File '{file}' renamed to '{new_name}' successfully.")
    except FileNotFoundError:
        print(f"Directory '{directory}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


# Example usage:
directory = 'Pho'
name = 'pho'

rename_files_in_directory(directory, name)
x