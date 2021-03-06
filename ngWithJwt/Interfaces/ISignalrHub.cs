using System.Threading.Tasks;

namespace SignalrDemo.Server.Interfaces
{
    public interface ISignalrHub
    {
        Task DisplayMessage(string message);
        Task UpdateProgressBar(int percentage);
        Task DisplayProgressMessage(string message);
    }
}
